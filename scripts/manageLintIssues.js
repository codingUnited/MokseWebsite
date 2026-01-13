const fs = require('fs');
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // GitHub token provided via workflow secrets
});

// Repository owner and name
const REPO_OWNER = 'codingUnited';
const REPO_NAME = 'MokseWebsite';

// Generate short path for file, starting from the 3rd level of depth
function generateShortPath(filePath) {
  const levels = filePath.split('/');
  const startPath = levels.slice(2, 5).join('/');
  const fileParent = levels.slice(levels.length - 2, levels.length - 1)[0];
  return `${startPath}/~${fileParent}`;
}

// Generate issue title based on short file path
function generateIssueTitle(filePath) {
  const shortPath = generateShortPath(filePath);
  const fileParentAndName = filePath.split('/').slice(-2).join('/');
  return `-${shortPath} on /${fileParentAndName}`;
}

// Main script for managing issues
(async () => {
  try {
    // Read lint results and directory tree output
    const lintResults = JSON.parse(fs.readFileSync(process.argv[2], 'utf-8'));
    const treeOutput = fs.readFileSync(process.argv[3], 'utf-8').split('\n');

    // Fetch existing issues
    const existingIssues = await octokit.issues.listForRepo({
      owner: REPO_OWNER,
      repo: REPO_NAME,
    });

    const existingIssuesMap = new Map();
    for (let issue of existingIssues.data) {
      existingIssuesMap.set(issue.title, issue);
    }

    for (let result of lintResults) {
      const filePath = result.filePath.replace('Application/', '');
      const lintMessage = result.message;
      const ruleId = result.ruleId;

      if (!treeOutput.includes(filePath)) {
        continue; // Skip if file not in the directory tree
      }

      const issueTitle = generateIssueTitle(filePath);
      const issueBody = `**File:** ${filePath}\n**Error:** ${lintMessage}\n**Rule ID:** ${ruleId}`;
      const labels = ['Lint Detection'];

      if (existingIssuesMap.has(issueTitle)) {
        const existingIssue = existingIssuesMap.get(issueTitle);
        const updatedBody = existingIssue.body.includes(lintMessage)
          ? existingIssue.body
          : `${existingIssue.body}\n\n**Additional Issue:** ${lintMessage}`;

        if (updatedBody !== existingIssue.body) {
          await octokit.issues.update({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            issue_number: existingIssue.number,
            body: updatedBody,
          });
        }
      } else {
        await octokit.issues.create({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          title: issueTitle,
          body: issueBody,
          labels,
        });
      }
    }

    for (let [title, issue] of existingIssuesMap) {
      const shortFilePath = title.match(/-([^ ]*) on/)[1];
      if (!treeOutput.some(line => line.includes(shortFilePath))) {
        await octokit.issues.update({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          issue_number: issue.number,
          state: 'closed',
        });
      }
    }

    console.log('Issues updated successfully.');
  } catch (e) {
    console.error('Error managing lint issues:', e.message);
  }
})();
