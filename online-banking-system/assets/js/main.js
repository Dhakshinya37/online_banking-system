// Main JavaScript for the banking application

// DOM Elements
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.createElement('div');
sidebarToggle.className = 'sidebar-toggle';
sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.header').prepend(sidebarToggle);

// Toggle Sidebar
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('expanded');
});

// Account Card Hover Effect
const accountCards = document.querySelectorAll('.account-card');
accountCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Quick Actions
const actionItems = document.querySelectorAll('.action-item');
actionItems.forEach(item => {
    item.addEventListener('click', () => {
        const actionText = item.querySelector('p').textContent;
        alert(`${actionText} action clicked!`);
    });
});

// Transfer Page Specific Code
if (document.querySelector('.transfer-form')) {
    // Account Type Selection
    const typeOptions = document.querySelectorAll('.type-option');
    const recipientSelectors = document.querySelectorAll('.recipient-selector');
    
    typeOptions.forEach(option => {
        option.addEventListener('click', () => {
            typeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            const type = option.dataset.type;
            recipientSelectors.forEach(selector => {
                selector.classList.add('hidden');
            });
            
            document.querySelector(`.${type}-recipient`).classList.remove('hidden');
        });
    });
    
    // Schedule Transfer Toggle
    const scheduleNow = document.getElementById('now');
    const scheduleLater = document.getElementById('later');
    const scheduleDate = document.querySelector('.schedule-date');
    
    scheduleLater.addEventListener('change', () => {
        if (scheduleLater.checked) {
            scheduleDate.classList.remove('hidden');
        }
    });
    
    scheduleNow.addEventListener('change', () => {
        if (scheduleNow.checked) {
            scheduleDate.classList.add('hidden');
        }
    });
    
    // Amount Input Formatting
    const amountInput = document.getElementById('amount');
    if (amountInput) {
        amountInput.addEventListener('blur', () => {
            const value = parseFloat(amountInput.value);
            if (!isNaN(value)) {
                amountInput.value = value.toFixed(2);
            }
        });
    }
    
    // Form Submission
    const transferForm = document.getElementById('transferForm');
    if (transferForm) {
        transferForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Transfer initiated successfully!');
            // In a real app, you would handle the form submission here
        });
    }
}

// Transactions Page Specific Code
if (document.querySelector('.transactions-table')) {
    // Sample transaction data
    const transactions = [
        {
            id: 1,
            description: "Amazon Purchase",
            icon: "shopping-bag",
            date: "May 5, 2023",
            account: "Main Account",
            amount: -45.99,
            status: "completed"
        },
        {
            id: 2,
            description: "Salary Deposit",
            icon: "arrow-down",
            date: "May 1, 2023",
            account: "Main Account",
            amount: 3500.00,
            status: "completed"
        },
        {
            id: 3,
            description: "Electric Bill Payment",
            icon: "bolt",
            date: "Apr 28, 2023",
            account: "Main Account",
            amount: -120.50,
            status: "completed"
        },
        {
            id: 4,
            description: "Restaurant Payment",
            icon: "utensils",
            date: "Apr 25, 2023",
            account: "Main Account",
            amount: -78.50,
            status: "completed"
        },
        {
            id: 5,
            description: "Transfer to Savings",
            icon: "piggy-bank",
            date: "Apr 20, 2023",
            account: "Savings Account",
            amount: 500.00,
            status: "completed"
        },
        {
            id: 6,
            description: "Netflix Subscription",
            icon: "tv",
            date: "Apr 15, 2023",
            account: "Main Account",
            amount: -14.99,
            status: "pending"
        },
        {
            id: 7,
            description: "Grocery Store",
            icon: "shopping-cart",
            date: "Apr 12, 2023",
            account: "Main Account",
            amount: -86.75,
            status: "failed"
        }
    ];
    
    // Render transactions
    const tableBody = document.querySelector('.table-body');
    
    transactions.forEach(transaction => {
        const row = document.createElement('div');
        row.className = 'transaction-row';
        
        const amountClass = transaction.amount >= 0 ? 'credit' : 'debit';
        const amountValue = transaction.amount >= 0 ? `+$${transaction.amount.toFixed(2)}` : `-$${Math.abs(transaction.amount).toFixed(2)}`;
        
        row.innerHTML = `
            <div class="transaction-description">
                <div class="transaction-icon-sm">
                    <i class="fas fa-${transaction.icon}"></i>
                </div>
                <span>${transaction.description}</span>
            </div>
            <div class="transaction-date-cell">${transaction.date}</div>
            <div class="transaction-account">${transaction.account}</div>
            <div class="transaction-amount-cell ${amountClass}">${amountValue}</div>
            <div class="transaction-status">
                <span class="status-badge ${transaction.status}">${transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}</span>
            </div>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Filter functionality
    const accountFilter = document.getElementById('account-filter');
    const typeFilter = document.getElementById('type-filter');
    const applyFiltersBtn = document.querySelector('.transaction-filters .btn-primary');
    
    applyFiltersBtn.addEventListener('click', () => {
        const accountValue = accountFilter.value;
        const typeValue = typeFilter.value;
        
        // In a real app, you would filter the transactions based on these values
        alert(`Filters applied:\nAccount: ${accountValue}\nType: ${typeValue}`);
    });
}

// Notification Bell
const notificationBell = document.querySelector('.notifications');
if (notificationBell) {
    notificationBell.addEventListener('click', () => {
        alert('You have 3 new notifications!');
    });
}