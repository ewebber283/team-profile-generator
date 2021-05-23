module.exports = aboutEngineer => {
    const {id, email, github} = aboutEngineer;
    return `
<div class="card" id="engineer">
    <div class="card-header">
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">z@gmail.com</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${github}">GitHub</a></li>
        </ul>
    </div>
</div>`
}