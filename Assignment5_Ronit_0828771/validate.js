const constraints = {
    email: {
        email: true
    },
    phone: {
        numericality: {
            onlyInteger: true
        },
        length: {
            is: 10
        }
    },
    zip: {
        numericality: {
            onlyInteger: true
        },
        length: {
            is: 5
        }
    },
    ccNumber: {
        numericality: {
            onlyInteger: true
        },
        length: {
            is: 10
        }
    },
    expirationDate: {
        format: {
            pattern: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
            message: 'must be a valid expiration date (MM/YY or MM/YYYY)'
        }
    },
    cvv: {
        numericality: {
            onlyInteger: true
        },
        length: {
            is: 3
        }
    }
};

function validateForm(formId) {
    const form = document.getElementById(formId);
    const errors = validate(form, constraints);
    if (errors) {
        console.log(errors);
        return false;
    }
    return true;
}
