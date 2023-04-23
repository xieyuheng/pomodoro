`PageDesktopMenuLoading` -- by `auth.isLoadingUser`
`PageMobileMenuLoading` -- by `auth.isLoadingUser`

rename `loadAuthUser` to `loginByToken`
rename `login` to `loginByPassword`
`loginByPassword` call `loginByToken`

[refactor] clear auth process
