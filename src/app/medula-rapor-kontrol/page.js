import SolutionPage, { buildSolutionMetadata } from "../../components/SolutionPage";
import { solutionPages } from "../../lib/solutionPages";

const page = solutionPages["medula-rapor-kontrol"];

export const metadata = buildSolutionMetadata(page);

export default function Page() {
  return <SolutionPage page={page} />;
}
