const users = [
    {
        id: 1,
        firstName: 'Michael',
        lastName: 'Lawson',
        email: 'michael.lawson@reqres.in'
    },
    {
        id: 2,
        firstName: 'Tobias',
        lastName: 'Funke',
        email: 'tobias.funke@reqres.in'
    },
    {
        id: 3,
        firstName: 'Lindsay',
        lastName: 'Ferguson',
        email: 'lindsay.ferguson@reqres.in'
    }
];

// ! 下面這塊 開關來練習
const ul = document.querySelector('ul');
users.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `${user.firstName} ${user.lastName} - <strong> ${user.email}</strong>`;
    ul.appendChild(li);
});