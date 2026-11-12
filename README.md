# RestPass staging preview

This public repository contains compiled assets only for the clearly labelled, non-transactional RestPass staging preview at `staging.restpass.lk`.

The private application source, server secrets, database credentials, real hotel data, payment configuration and transactional email configuration are not stored here.

Current compiled source: `SalmaanNasir/restpass@cd7b3e5cd4f3887bcb5e53ade40bead0454d5d30`.

Build gates: checkout and first-party behavioural collection disabled, demo mode disabled, the public
partner knowledge hub unpublished, administrator MFA required, and the Supabase target fixed to
`qfdhbbnjudfitwrrbxuy`. Customer accounts and reviews are visible only for the controlled staging
UAT. The server enforces the approved tester allowlist. Apple authentication, scheduled review
invitations, checkout, analytics and monitoring remain disabled.
