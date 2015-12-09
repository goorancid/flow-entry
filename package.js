Package.describe({
    name: "goorancid:accounts-flow-entry",
    version: '0.1.0',
    summary: "Make signin and signout their own pages with routes utilizing FlowRouter.",
    git: 'https://github.com/goorancid/flow-entry',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@1.2.0.1");

    api.use(['kadira:flow-router@2.10.0', 'softwarerero:accounts-t9n@1.0.3', 'joshowens:simple-form@0.2.1', 'sacha:spin@2.0.4'], ['client', 'server']);
    // CLIENT
    api.use([
            'deps',
            'service-configuration',
            'accounts-base',
            'underscore',
            'templating',
            'handlebars',
            'session',
            'coffeescript',
            'less',
            'sha'],
        'client'
    );


    api.addFiles([
        'client/entry.coffee',
        'client/entry.less',
        'client/helpers.coffee',
        'client/views/signIn/signIn.html',
        'client/views/signIn/signIn.coffee',
        'client/views/signUp/signUp.html',
        'client/views/signUp/signUp.coffee',
        'client/views/signUp/extraSignUpFields.html',
        'client/views/signUp/extraSignUpFields.coffee',
        'client/views/forgotPassword/forgotPassword.html',
        'client/views/forgotPassword/forgotPassword.coffee',
        'client/views/resetPassword/resetPassword.html',
        'client/views/resetPassword/resetPassword.coffee',
        'client/views/enrollAccount/enrollAccount.html',
        'client/views/enrollAccount/enrollAccount.coffee',
        'client/views/social/social.html',
        'client/views/social/social.coffee',
        'client/views/error/error.html',
        'client/views/error/error.coffee',
        'client/views/accountButtons/accountButtons.html',
        'client/views/accountButtons/_wrapLinks.html',
        'client/views/accountButtons/signedIn.html',
        'client/views/accountButtons/accountButtons.coffee',
        'client/views/verificationPending/verificationPending.html',
        'client/views/verificationPending/verificationPending.coffee',
        'client/t9n/english.coffee',
        'client/t9n/french.coffee',
        'client/t9n/german.coffee',
        'client/t9n/italian.coffee',
        'client/t9n/polish.coffee',
        'client/t9n/spanish.coffee',
        'client/t9n/swedish.coffee',
        'client/t9n/portuguese.coffee',
        'client/t9n/slovene.coffee',
        'client/t9n/russian.coffee',
        'client/t9n/arabic.coffee',
        'client/t9n/hebrew.coffee'
    ],
        'client'
    );

    // SERVER
    api.use([
        'deps',
        'service-configuration',
        'accounts-password',
        'accounts-base',
        'underscore',
        'coffeescript'
    ],
        'server'
    );

    api.addFiles(['server/entry.coffee'], 'server');

    // CLIENT and SERVER
    api.imply('accounts-base', ['client', 'server']);
    api.imply('accounts-password', ['client', 'server']);
    api.export('AccountsEntry', ['client', 'server']);
    api.export('AccountsEntrySignInRequired', ['client', 'server']);
    api.addFiles(['shared/router.js'], ['client', 'server']);

});
