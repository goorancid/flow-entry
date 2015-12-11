This is a fork of dovrosenberg:accounts-entry-flow which is a fork of joshowens:accounts-entry. This version utilizes Flow Router instead of Iron Router.

####Last modified 10 Dec 2015

## Getting started

Install:

Download repo, add it to root level folder named packages, then in the terminal type:

```
meteor add goorancid:accounts-flow-entry
```

See the [original](https://github.com/Differential/accounts-entry) package for more details on usage and examples.  The differences are described here:

## Ensuring signed in users for routes

Use the helper function AccountsEntrySignInRequired in an entry trigger for any route that requires users to be signed in.  This will redirect the user to the included sign-in page and stop any rendering. Accounts-entry also tracks where the user was trying to go and will route them back after sign in.

Here is a route example:

````js
FlowRouter.route('/dashboard', {
		name: 'dashboard',
		triggersEnter: [
			AccountsEntrySignInRequired
		],
		action: function(params) {
			FlowLayout.render('dashboard');
		}
	}
);
````

You can also apply this to every route at once (making sure to exclude the logged out route):
````js
FlowRouter.triggers.enter([AccountsEntrySignInRequired], {except: ['loggedOut']});
````
