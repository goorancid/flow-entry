####Last modified 31 Jan 2016

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
