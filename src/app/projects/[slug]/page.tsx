import { notFound } from "next/navigation";
import { PageTransition } from "@/components/PageTransition";
import { ProjectWindow } from "@/components/ProjectWindow";
import { getProject } from "@/content/projects";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export function generateStaticParams() {
  return [
    { slug: "atlas-dashboard" },
    { slug: "meridian-app" },
    { slug: "studio-site" },
    { slug: "flow-kit" },
  ];
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="min-h-screen" aria-hidden />
      <ProjectWindow project={project} />
    </PageTransition>
  );
}
