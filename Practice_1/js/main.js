const userList = () => {
    const users = document.getElementById('users');

    person.result.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('col');
        userDiv.innerHTML = `
        <div class="card shadow-lg">
        <h5 class="card-header">Person Name: ${user.name.common}</h5>
        <div class="card-body">
            <p class="card-text">age: ${user.age}</p>
            <p class="card-text">Street: ${user.address.street}, House No: ${user.address.house}</p>
        </div>
        </div>
    `
        users.appendChild(userDiv);
    })
}

userList();