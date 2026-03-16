const menuItems = [
{
name: "昆布松露黄金汤底",
desc: "慢熬12小时昆布高汤，加入黑松露与牛骨髓提香。",
price: "¥168 / 锅",
},
{
name: "澳洲M9和牛上脑",
desc: "雪花纹理细密，口感绵密丰润，建议涮8-10秒。",
price: "¥298 / 份",
},
{
name: "阿拉斯加帝王蟹腿",
desc: "每日冷链直达，肉质鲜甜紧实，适合清汤或菌汤。",
price: "¥368 / 份",
},
{
name: "伊比利亚黑猪梅花",
desc: "西班牙橡果饲养黑猪，脂香分布均匀，层次丰富。",
price: "¥168 / 份",
},
{
name: "云南野生菌拼盘",
desc: "松茸、鸡枞、牛肝菌时令组合，风味鲜明。",
price: "¥188 / 份",
},
{
name: "手打虾滑·海胆点缀",
desc: "鲜虾手工捶打，辅以少量海胆提升海味回甘。",
price: "¥128 / 份",
},
{
name: "潮汕手工牛肉丸",
desc: "当天现制，弹牙多汁，搭配沙茶酱更佳。",
price: "¥88 / 份",
},
{
name: "甜品：金箔豆乳布丁",
desc: "低糖配方，豆香细腻，搭配食用金箔与焦糖脆片。",
price: "¥58 / 份",
},
];

const menuGrid = document.getElementById("menuGrid");

menuItems.forEach((item) => {
const card = document.createElement("article");
card.className = "card";
card.innerHTML = `
<h3>${item.name}</h3>
<p class="desc">${item.desc}</p>
<div class="price">${item.price}</div>
`;
menuGrid.appendChild(card);
});
