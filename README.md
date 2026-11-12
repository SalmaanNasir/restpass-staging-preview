# RestPass staging preview

This public repository contains compiled assets only for the clearly labelled, non-transactional RestPass staging preview at `staging.restpass.lk`.

The private application source, server secrets, database credentials, real hotel data, payment configuration and transactional email configuration are not stored here.

Current compiled source: `SalmaanNasir/restpass@39554b9b2166ea5e2e3ae79275db3aa2d940b236`.

Build gates: checkout and first-party behavioural collection disabled, demo mode disabled, the public
partner knowledge hub unpublished, administrator MFA required, and the Supabase target fixed to
`qfdhbbnjudfitwrrbxuy`. The merged V2 customer-account and review code is present in this artifact,
while both browser release gates remain disabled pending the separately controlled policy and Auth
release prerequisites.
