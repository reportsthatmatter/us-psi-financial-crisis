This report is the culmination of efforts, begun in November 2008, by the Permanent Subcommittee on Investigations, to ascertain the key causes of the financial crisis. It identifies four causative factors: high-risk lending by US financial institutions, regulatory failures, inflated credit ratings and, high-risk, poor-quality financial products designed and sold by investment banks. It expands on the hearings conducted into these factors, as well as interviews and case studies, and provides findings of fact, analysis of the issues, and recommendations for next steps.

## Summary

The report comprises:
* An executive summary
* A chapter on the background to the events in question
* Four case studies, one for each of the four causative factors identified:
  * High-risk lending by US financial institutions: case study of Washington Mutual Bank 
  * Regulatory failure: case study of the Office of Thrift Supervision
  * Inflated credit ratings: case study of Moody's and Standard & Poor's
  * Investment bank abuses: Case study of Goldman Sachs and Deutsche Bank
* Policy recommendations to ward against a repeat of the crisis

## Materials

Come from the Senate website at [https://www.hsgac.senate.gov/subcommittees/investigations/reports?c=112](https://www.hsgac.senate.gov/subcommittees/investigations/reports?c=112) 

See the datapackage.json for details.

## License

Federal government and so public domain.

## Rebuilding the text

`full.md` is generated, never hand-edited. `ingest.ts` is the whole recipe —
which PDFs, in what order, with what metadata, and which pipeline passes.

```bash
pnpm install
pnpm exec tsx ../reportsthatmatter/scripts/ingest/cli.ts run us-psi-financial-crisis
```

Corrections to the text go in `corrections.yaml`, never into `full.md`. Each
must match exactly once or the build fails naming it. `baseline.json` is the
regression digest: if a pipeline change moves this report's output, it fails
until the baseline moves with it after the diff has been read.

The pipeline itself is [`@rtm/ingest`](https://github.com/reportsthatmatter/ingest),
pinned in `package.json` — improvements are adopted here deliberately, with a
diff, rather than arriving unannounced.
