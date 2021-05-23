module.exports = aboutManager => {
    const { id, email, officeNumber} = aboutManager;
    return `
    <div class="container" id="manager">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <div class="card">
    <div class="card-header">
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">${id}: 1</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">${officeNumber}: 1</li>
        </ul>
    </div>`
}