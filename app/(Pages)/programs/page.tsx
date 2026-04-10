import { BodyTemplate, HeaderTemplate, PageBuilder, SectionTemplate } from "@/components/page-builder/template";


export default function Programs() {
    return (
        <PageBuilder>
            <HeaderTemplate
                title={"Programs"}
                imageHeight={"30vh"}
                titleAlignment={2}
                titleLocation={100}
                description={"Discover our innovative programs designed to empower and support justice-impacted individuals on their journey to reintegration and success. Explore our range of services, resources, and opportunities to get involved and make a positive impact in your community."} />
            <BodyTemplate>
                <SectionTemplate>Programs coming soon!</SectionTemplate>
            </BodyTemplate>
        </PageBuilder>
    )
}