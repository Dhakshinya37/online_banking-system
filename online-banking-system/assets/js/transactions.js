// Transactions Page JavaScript

// Initialize date pickers with default values
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    
    // Format dates as YYYY-MM-DD
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    
    // Set default date range (last month to today)
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    
    if (startDateInput && endDateInput) {
        startDateInput.value = formatDate(oneMonthAgo);
        endDateInput.value = formatDate(today);
    }
    
    // Add click event to transaction rows
    const transactionRows = document.querySelectorAll('.transaction-row');
    transactionRows.forEach(row => {
        row.addEventListener('click', function() {
            // In a real app, you would show transaction details
            const description = this.querySelector('.transaction-description span').textContent;
            alert(`Viewing details for: ${description}`);
        });
    });
    
    // Pagination functionality
    const pageNumbers = document.querySelectorAll('.page-numbers span');
    pageNumbers.forEach(number => {
        number.addEventListener('click', function() {
            pageNumbers.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
            
            // In a real app, you would load the selected page of transactions
            console.log(`Loading page ${this.textContent}`);
        });
    });
    
    // Previous/Next buttons
    const prevBtn = document.querySelector('.pagination .btn-outline:first-child');
    const nextBtn = document.querySelector('.pagination .btn-outline:last-child');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            const activePage = document.querySelector('.page-numbers span.active');
            const prevPage = activePage.previousElementSibling;
            
            if (prevPage && prevPage.classList.contains('page-numbers')) {
                activePage.classList.remove('active');
                prevPage.classList.add('active');
                console.log(`Loading page ${prevPage.textContent}`);
            }
        });
        
        nextBtn.addEventListener('click', function() {
            const activePage = document.querySelector('.page-numbers span.active');
            const nextPage = activePage.nextElementSibling;
            
            if (nextPage && nextPage.classList.contains('page-numbers')) {
                activePage.classList.remove('active');
                nextPage.classList.add('active');
                console.log(`Loading page ${nextPage.textContent}`);
            }
        });
    }
});

// Filter transactions by account type
function filterTransactionsByAccount(accountType) {
    // In a real app, you would filter the transactions array
    console.log(`Filtering by account: ${accountType}`);
}

// Filter transactions by transaction type
function filterTransactionsByType(transactionType) {
    // In a real app, you would filter the transactions array
    console.log(`Filtering by type: ${transactionType}`);
}

// Export transactions
function exportTransactions(format) {
    alert(`Exporting transactions as ${format.toUpperCase()}`);
    // In a real app, you would generate and download the file
}