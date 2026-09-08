import SolutionPage, { buildSolutionMetadata } from "../../components/SolutionPage";
import { solutionPages } from "../../lib/solutionPages";

const page = solutionPages["toplu-recete-kontrolu"];

export const metadata = buildSolutionMetadata(page);

export default function Page() {
  return <SolutionPage page={page} />;
}
