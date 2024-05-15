document.addEventListener('DOMContentLoaded', (event) => {
  const firstMenuItems = document.querySelectorAll('.firstMenu div');
  const subMenuItems = document.querySelectorAll('.subMenu div');
  // 获取所有的按钮
  const buttons = document.querySelectorAll('.head-b');

  // 为每个按钮添加点击事件监听
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // 先移除所有按钮的 selected 类
      buttons.forEach(btn => btn.classList.remove('selected'));
      // 为被点击的按钮添加 selected 类
      button.classList.add('selected');
    });
  });
  //两个顶部按钮的切换
  document.getElementById('keyIndicatorsBut').addEventListener('click', function () {
    document.getElementById('keyIndicators').style.display = 'flex';
    document.getElementById('selfDefine').style.display = 'none';
  });

  document.getElementById('selfDefineBut').addEventListener('click', function () {
    document.getElementById('keyIndicators').style.display = 'none';
    document.getElementById('selfDefine').style.display = 'flex';
  });


  // 用于清除所有一级菜单的选中状态
  function clearFirstMenuSelection() {
    firstMenuItems.forEach(item => {
      item.classList.remove('active');
    });
  }

  // 隐藏所有二级导航栏项的函数
  function hideAllSubMenuItems() {
    subMenuItems.forEach(item => {
      item.style.display = 'none'; // 隐藏元素
    });
  }

  // 显示特定索引的二级导航栏项的函数
  function showSubMenu(index) {
    hideAllSubMenuItems(); // 首先隐藏所有项
    clearFirstMenuSelection(); // 清除一级菜单的选中状态
    firstMenuItems[index].classList.add('active'); // 为当前点击的一级菜单项添加选中状态
    document.querySelectorAll(`.subMenu .sub-${index}`).forEach(item => {
      item.style.display = 'block'; // 显示对应的项
    });
  }

  // 给所有一级导航栏项添加点击事件监听器
  firstMenuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      showSubMenu(index); // 根据索引显示二级导航栏
    });
  });

  // 给所有二级导航栏项添加点击事件监听器
  subMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      subMenuItems.forEach(subItem => {
        subItem.classList.remove('active'); // 首先移除所有二级菜单项的选中状态
      });
      item.classList.add('active'); // 然后为当前点击的二级菜单项添加选中状态
    });
  });

  // 初始时隐藏所有的二级导航栏项
  hideAllSubMenuItems();
});
