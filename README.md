# restpass staging preview

This public repository contains compiled assets only for the clearly labelled, non-transactional restpass staging preview at `staging.restpass.lk`.

The private application source, server secrets, database credentials, real hotel data, payment configuration and transactional email configuration are not stored here.

Current compiled source: `SalmaanNasir/restpass@4dc92a96af0f7eb00717c83fdb496ad6eb2f7e7b`.

Build gates: checkout and first-party behavioural collection disabled, demo mode disabled, the public
partner knowledge hub browser-disabled, administrator MFA required, and the Supabase target fixed to
`qfdhbbnjudfitwrrbxuy`. Customer accounts, final post-visit feedback and scheduled review invitations
are enabled for controlled staging UAT. The server enforces the approved tester allowlist. Apple
authentication is enabled for controlled staging UAT. Checkout, analytics and monitoring remain disabled.
