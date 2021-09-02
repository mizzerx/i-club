export const rgba = (r: number, g: number, b: number, a: number) =>
  `rgba(${r}, ${g}, ${b}, ${a})`;

const AppColors = {
  whiteColor: rgba(255, 255, 255, 1),
  blackColor: rgba(0, 0, 0, 1),
  greyColor: rgba(150, 150, 150, 1),
};

export default AppColors;
