`PageDesktopMenuLoading` -- by `auth.isLoadingUser`
`PageMobileMenuLoading` -- by `auth.isLoadingUser`

rename `loadAuthUser` to `loginByToken`
rename `login` to `loginByPassword`
`loginByPassword` call `loginByToken`

do not send login request when there is no token

[refactor] clear auth process
