// create constructor
var Profile = Vue.extend({
    template: `
        <div>
            <h2>Hello from Vue</h2>
            <table>
            <tr v-for="apartment in apartments">
                <td>{{ apartment.id }}</td>
                <td>
                    {{ apartment.streetaddress }}<br />
                    {{ apartment.city }}<br />
                    {{ apartment.zipcode }}
                </td>
                <td>{{ apartment.country }}</td>
                <td>{{ apartment.buildyear }}</td>
            </tr>
            </table>
        </div>
    `,
    data: function () {

        let vueAppState = initialAppState;

        return vueAppState;
    }
});
// create an instance of Profile and mount it on an element
new Profile().$mount('#vue-app');