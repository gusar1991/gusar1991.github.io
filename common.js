const createSkillsRow = (item) => {
    var row = document.createElement('li');
    row.className = 'user-info_item';
    row.innerHTML = `<div class="user-info_item-title">${item.title}</div>
							<div class="user-info_item-content">${item.value}</div>`;
    return row;
}



const init = (user_profile) => {
    let avatar = document.getElementById('avatar');
    let username = document.getElementById('username');
    let introtext = document.getElementById('introtext');
    let sv = document.getElementById('sv');
    let ul = document.createElement('ul');
    ul.className = 'user-info_list';

    username.innerText = user_profile.username;
    avatar.setAttribute('src',user_profile.avatar);

    for(let i = 0; i < user_profile.skils_list.length; i++) {
        ul.appendChild(createSkillsRow(user_profile.skils_list[i]));
    }

    document.getElementById('user-info_content').appendChild(ul);

    introtext.innerText = user_profile.introtext;
    sv.innerHTML = user_profile.sv;


}
init(user_profile);
