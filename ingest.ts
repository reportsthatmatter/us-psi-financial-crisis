import { listedHeadings, citationRunOver, pipeline } from "@rtm/ingest";

/**
 * How this report is built. Owned by the report: every decision that shaped
 * its text is named here, and the passes it composes are library code, so a
 * fix to a shared pass reaches every report that calls it.
 */
export default pipeline({
  id: "us-psi-financial-crisis",
  title: "Wall Street and the Financial Crisis: Anatomy of a Financial Collapse",
  authors: "U.S. Senate Permanent Subcommittee on Investigations",
  published_at: "13 April 2011",
  source_url: "https://www.hsgac.senate.gov/subcommittees/investigations/reports?c=112",
  repo: ".",
  // Order is semantic: footnote numbering and page indices run continuously
  // across volumes, so reordering changes the output.
  volumes: [
    { path: "archive/PSI REPORT - Wall Street & the Financial Crisis-Anatomy of a Financial Collapse (FINAL 5-10-11).pdf", sha256: "3dec3dfa693805d889836db496aa0691e7e8964427524ea8137792362cc81d84" },
  ],
  passes: [
    // The report quotes exhibits whose captions and memo lines look like
    // headings ("WALK-UP MUSIC FOR DAVID SCHNEIDER", "PRIVILEGED AND
    // CONFIDENTIAL - S&P DISCUSSION PURPOSES ONLY"). Its contents lists every
    // section and subsection, so only a heading it names is read as one.
    listedHeadings(),
    // ~17 notes run over an entire page or two — a block quotation, its
    // source line, more prose — none of it double-spaced, so the ordinary
    // run-over check never fires (reportsthatmatter-626). This report's
    // footnotes are dense with Bates numbers and hearing exhibits, so a
    // paragraph that dense joins the run-over; the first that reads as
    // ordinary prose stops it.
    citationRunOver(),
  ],
});
