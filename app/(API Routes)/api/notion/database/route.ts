
import { NextRequest, NextResponse } from "next/server";

interface NotionDatabaseEntry {
    properties: {
        verificationDate: { date: { start: string } };
        region: { multi_select: { name: string }[] };
        category: { multi_select: { name: string }[] };
        id: { number: number };
        description: { rich_text: { plain_text: string }[] };
        "url ( link )": { url: string };
        WebLogoURL: { rich_text: { plain_text: string }[] };
        Name: { title: { text: { content: string } }[] };
    };
}

export async function POST(req: NextRequest) {
    try {
        const databaseId = process.env.NOTION_DATABASE_KEY;
        const token = process.env.NOTION_TOKEN || req.headers.get("Authorization");
        const baseUrl = process.env.NOTION_BASE_URL || "https://api.notion.com/v1/";

        if (!databaseId || !token) {
            return NextResponse.json({ error: "Notion database ID or token not configured" }, { status: 500 });
        }
        const response = await fetch(`${baseUrl}databases/${databaseId}/query`, {
            method: "POST",
            headers: {
                "Authorization": token.startsWith("Bearer ") ? token : `Bearer ${token}`,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Notion API error:", errorData);
            return NextResponse.json({ error: "Notion API error", details: errorData }, { status: response.status });
        }
        const data = await response.json();
        const payload = data.results.map((entry: NotionDatabaseEntry) => {
            const baseSchema = entry.properties;
            return {
                verificationDate: baseSchema.verificationDate?.date?.start || "",
                region: baseSchema.region?.multi_select?.map((location) => location.name) || [],
                category: baseSchema.category?.multi_select?.map(category => category.name) || [],
                id: baseSchema.id?.number || null,
                description: baseSchema.description?.rich_text[0]?.plain_text || "",
                WebLogoURL: baseSchema.WebLogoURL?.rich_text[0]?.plain_text || "",
                url: baseSchema["url ( link )"]?.url || "",
                title: baseSchema.Name?.title.map(({ text }) => text.content).join(" ") || "",
            };
        });


        return NextResponse.json({
            message: "Notion database fetched successfully",
            payload: payload,

        }, { status: 200 });
    } catch (error) {
        console.error("Error fetching Notion database:", error);
        return NextResponse.json({ error: "Failed to fetch Notion database" }, { status: 500 });
    }
}


export async function GET(req: NextRequest) {
    try {
        const databaseId = process.env.NOTION_DATABASE_KEY;
        const token = process.env.NOTION_TOKEN || req.headers.get("Authorization");
        const baseUrl = process.env.NOTION_BASE_URL || "https://api.notion.com/v1/";

        if (!databaseId || !token) {
            return NextResponse.json({ error: "Notion database ID or token not configured" }, { status: 500 });
        }
        const response = await fetch(`${baseUrl}databases/${databaseId}/query`, {
            method: "POST",
            headers: {
                "Authorization": token.startsWith("Bearer ") ? token : `Bearer ${token}`,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Notion API error:", errorData);
            return NextResponse.json({ error: "Notion API error", details: errorData }, { status: response.status });
        }
        const data = await response.json();
        const payload = data.results.map((entry: NotionDatabaseEntry) => {
            const baseSchema = entry.properties;
            return {

                verificationDate: baseSchema.verificationDate?.date?.start || "",
                region: baseSchema.region?.multi_select?.map((location) => location.name) || [],
                category: baseSchema.category?.multi_select?.map(category => category.name) || [],
                id: baseSchema.id?.number || null,
                description: baseSchema.description?.rich_text[0]?.plain_text || "",
                WebLogoURL: baseSchema.WebLogoURL?.rich_text[0]?.plain_text || "",
                url: baseSchema["url ( link )"]?.url || "",
                title: baseSchema.Name?.title.map(({ text }) => text.content).join(" ") || "",
            };
        });


        return NextResponse.json({
            message: "Notion database fetched successfully",
            payload: payload,

        }, { status: 200 });
    } catch (error) {
        console.error("Error fetching Notion database:", error);
        return NextResponse.json({ error: "Failed to fetch Notion database" }, { status: 500 });
    }
}