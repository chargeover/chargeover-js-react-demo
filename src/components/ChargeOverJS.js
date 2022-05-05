import React from 'react';

export default class ChargeOverJS extends React.Component {
    componentDidMount() {
        /**
         * You can find this information at:
         * https://YOUR_INSTANCE.chargeover.com/admin/r/devfeature/view/saas.cojs_enabled
         */
        window.ChargeOver.Core.setup({
            'instance': 'example.chargeover.com',
            'token': 'abcdefg1234567'
        });
    }

    createCustomer() {
        const customerData = {
            customer: {
                company: 'My Company Name, LLC',
                bill_addr1: '56 Cowles Road',
                bill_addr2: '',
                bill_addr3: '',
                bill_city: 'Mt Pleasant',
                bill_state: 'MI',
                bill_postcode: '48858',
                bill_country: 'United States',
            },
            user: {
                name: 'John Doe',
                phone: '888-924-2347',
                email: 'test@ChargeOver.com'
            }
        };

        window.ChargeOver.Customer.create(customerData, (code, message, response) => {
            if (code === 200)
            {
                console.log(`Created customer ${response.customer.company}`);
            }else{
                console.error(`Failed to create customer: ${message}`);
            }
        });
    }

    render() {
        return <button onClick={this.createCustomer}>Create a customer</button>;
    }
}
