import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
        SyncedCron.start();
        Meteor.call('startCron');
});
SyncedCron.add({
    name: 'startCron',
    schedule: function (parser) {
        return parser.text('at 10:30 am');
    },
    job: function () {
        console.log("Cron Started")
        Meteor.call('startCron');
    }
});
Meteor.methods({
    startCron(){
        console.log("yes working");
        var result = Meteor.http.call("GET", "http://localhost/abc/xyz/");
    }
})