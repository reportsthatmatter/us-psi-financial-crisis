import { quoteListRunOns, listedHeadings, citationRunOver, escapeLeadingHash, footnoteGap, romanFolios, pipeline } from "@rtm/ingest";

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
    // A quotation running over a page arrives as two (reportsthatmatter-38s.9).
    quoteListRunOns(),
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
    // The press release's end mark "# # #" opened a paragraph and rendered as
    // a heading. Needs the @rtm/ingest release that carries escapeLeadingHash
    // (ingest PR #26, reportsthatmatter-6zo).
    // Embedded charts leave a wide gap that moved a note out of its foot-of-page
    // place: note 1864 under a chart placeholder (p.449) and note 2095's tail
    // under a gap that ends mid-sentence (p.497) printed in the body
    // (reportsthatmatter-74p). Needs the @rtm/ingest release with footnoteGap.
    footnoteGap(),
    escapeLeadingHash(),
    // The front matter is folioed ii, iii, iv in roman numerals, which stayed
    // in the text. Needs the @rtm/ingest release that carries romanFolios
    // (reportsthatmatter-cbr).
    romanFolios(),
  ],
});
