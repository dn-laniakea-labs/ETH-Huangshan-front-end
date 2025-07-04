import { ProjectCard } from "../ProjectCard"


export const HomeMain = () => {
  return <main id="container" className="px-8 pt-12 pb-8 bg-zinc-900 min-h-dvh">

    <ProjectCard id={5} logo="/astro.svg" name="海螺AI" introduction="怕怕怕怕怕怕怕怕怕怕怕怕怕" categories={[{ id: 1, name: "8888" }, { id: 2, name: "99999999999999" }]} upVotes={5} />

  </main>
}