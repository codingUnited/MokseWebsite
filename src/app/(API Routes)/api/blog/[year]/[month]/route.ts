import fs from "fs";
import path from "path";

export function GET(
    request: Request,
    { params }: { params: { year: string; month: string } }
) {
    const dataFile = path.join(
        process.cwd(),
         "src",
        "app",
        "(API Routes)",
        "api",
        "data",
        "blogs.json"
    );

    const blogs = JSON.parse(fs.readFileSync(dataFile, "utf8"));

    const filtered = blogs.filter(
        (b: any) =>
            b.dateY.toString() === params.year &&
            b.dateM.toString().padStart(2, "0") === params.month
    );

    return Response.json(filtered);
}
