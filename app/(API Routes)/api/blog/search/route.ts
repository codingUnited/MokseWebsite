import fs from "fs";
import path from "path";

export function GET(request: Request) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q")?.toLowerCase() ?? "";

    const dataFile = path.join(
        process.cwd(),
        "app",
        "(API Routes)",
        "api",
        "data",
        "blogs.json"
    );

    const blogs = JSON.parse(fs.readFileSync(dataFile, "utf8"));

    const filtered = blogs.filter((b: any) =>
        b.title.toLowerCase().includes(q)
    );

    return Response.json(filtered);
}
