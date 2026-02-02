/* =================================
   Exercise 4: Form Validation Script
   ================================= */

const form = document.getElementById('contactForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const agreeCheckbox = document.getElementById('agree');
const charCountSpan = document.getElementById('charCount');
const successMessage = document.getElementById('successMessage');

// Validation rules
const validationRules = {
    fullName: {
        element: fullNameInput,
        errorElement: document.getElementById('nameError'),
        validate: (value) => {
            if (!value.trim()) {
                return 'Full name is required';
            }
            if (value.trim().length < 2) {
                return 'Name must be at least 2 characters long';
            }
            return '';
        }
    },
    email: {
        element: emailInput,
        errorElement: document.getElementById('emailError'),
        validate: (value) => {
            if (!value.trim()) {
                return 'Email is required';
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email address';
            }
            return '';
        }
    },
    phone: {
        element: phoneInput,
        errorElement: document.getElementById('phoneError'),
        validate: (value) => {
            if (value && !/^\+?[\d\s\-()]{7,}$/.test(value)) {
                return 'Please enter a valid phone number';
            }
            return '';
        }
    },
    subject: {
        element: subjectInput,
        errorElement: document.getElementById('subjectError'),
        validate: (value) => {
            if (!value) {
                return 'Please select a subject';
            }
            return '';
        }
    },
    message: {
        element: messageInput,
        errorElement: document.getElementById('messageError'),
        validate: (value) => {
            if (!value.trim()) {
                return 'Message is required';
            }
            if (value.trim().length < 10) {
                return 'Message must be at least 10 characters long';
            }
            if (value.length > 500) {
                return 'Message must not exceed 500 characters';
            }
            return '';
        }
    },
    agree: {
        element: agreeCheckbox,
        errorElement: document.getElementById('agreeError'),
        validate: (checked) => {
            if (!checked) {
                return 'You must agree to continue';
            }
            return '';
        }
    }
};

// Real-time validation on input
Object.keys(validationRules).forEach(fieldName => {
    const rule = validationRules[fieldName];
    
    rule.element.addEventListener('blur', () => {
        validateField(fieldName);
    });

    if (fieldName !== 'agree') {
        rule.element.addEventListener('input', () => {
            validateField(fieldName);
        });
    } else {
        rule.element.addEventListener('change', () => {
            validateField(fieldName);
        });
    }
});

// Character counter for message
messageInput.addEventListener('input', () => {
    charCountSpan.textContent = messageInput.value.length;
});

// Validate single field
function validateField(fieldName) {
    const rule = validationRules[fieldName];
    let value;

    if (fieldName === 'agree') {
        value = rule.element.checked;
    } else {
        value = rule.element.value;
    }

    const error = rule.validate(value);
    const element = rule.element;

    if (error) {
        element.classList.remove('success');
        element.classList.add('error');
        rule.errorElement.textContent = error;
    } else {
        element.classList.remove('error');
        element.classList.add('success');
        rule.errorElement.textContent = '';
    }
}

// Validate entire form
function validateForm() {
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
        validateField(fieldName);
        const rule = validationRules[fieldName];
        
        if (rule.errorElement.textContent) {
            isValid = false;
        }
    });

    return isValid;
}

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        // Show success message
        successMessage.classList.remove('hidden');

        // Log form data
        const formData = {
            fullName: fullNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            subject: subjectInput.value,
            message: messageInput.value,
            subscribe: document.getElementById('subscribe').checked
        };

        console.log('Form submitted with data:', formData);

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth' });

        // Reset form after 2 seconds
        setTimeout(() => {
            form.reset();
            successMessage.classList.add('hidden');
            charCountSpan.textContent = '0';
            
            // Clear validation states
            Object.keys(validationRules).forEach(fieldName => {
                const element = validationRules[fieldName].element;
                element.classList.remove('success', 'error');
                validationRules[fieldName].errorElement.textContent = '';
            });
        }, 3000);
    } else {
        console.log('Form has validation errors');
    }
});

// Form reset
form.addEventListener('reset', () => {
    setTimeout(() => {
        successMessage.classList.add('hidden');
        charCountSpan.textContent = '0';
        
        Object.keys(validationRules).forEach(fieldName => {
            const element = validationRules[fieldName].element;
            element.classList.remove('success', 'error');
            validationRules[fieldName].errorElement.textContent = '';
        });
    }, 0);
});
