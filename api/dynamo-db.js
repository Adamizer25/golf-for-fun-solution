export async function getUser(id) {
    let method = 'GET'
    let headers = { 'Content-Type': 'application/json;charset=utf-8' }
    let response = await fetch(`http://localhost:4001/users/${id}`, { method, headers })
    let json = await response.json();
    return json.item;
}
export async function addUser(id, firstName, lastName, age, email, cell) {
    let method = 'POST'
    let headers = { 'Content-Type': 'application/json;charset=utf-8' }
    let body = JSON.stringify({ id, firstName, lastName, age, email, cell })
    console.log({ method, headers, body })
    let response = await fetch('http://localhost:4001/users', { method, headers, body })
    let json = await response.json();
    return json.item;
}
export async function deleteUser(id) {
    let method = 'DELETE'
    let headers = { 'Content-Type': 'application/json;charset=utf-8' }
    let response = await fetch(`http://localhost:4001/users/${id}`, { method, headers })
    return response;
}
export async function allUsers() {
    let method = 'GET'
    let headers = { 'Content-Type': 'application/json;charset=utf-8' }
    let response = await fetch(`http://localhost:4001/users`, { method, headers })
    let json = await response.json();
    return json.items;
}