# angular-week-guards

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-week-guards)

# Topics

## Routing overview
    - forRoot vs forChild
### Lazy Loading overview

## Guards
### CanActivate
- Check Prerequisites
- Limit Access
### CanActivateChild
- Same as applying CanActivate to each child
- Executes when child route changes, CanActivate doesn't
### CanDeactivate
- Prevent leaving incomplete form 
- only inside angular, use @HostListener
### CanLoad
- Prevent loading lazy module if CanActivate = false
### Resolve
- Compare to a regular service
- Observable
### Other
- Issue with RedirectTo and CanActivate (landing url)
  - To test this go to <u>{host}/add/milk</u>
- Order of execution

To test the guards search the for the text <code>/* Uncomment to test*/</code> in the code

