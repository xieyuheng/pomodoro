[pomodoro] [refactor] use object as state -- instead of class
remove `models/`
remove `jsons/`
use fidb as backend -- to test password auth
can be used without local backend
use localStorage to avoid CSRF
play sound only on `start`
`models/Form` validate `Invalid` type
