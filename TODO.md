- fix the use of `state.auth.loadUser()` -- use `cookie`

- `hooks/useForm` validate `Invalid` type

- `/login` & `/register` redirect for `guest`

- Unless fetch() is called with the credentials option set to include, fetch():
  - won't send cookies in cross-origin requests
  - won't set any cookies sent back in cross-origin responses
