import React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {IIcon} from '../../../base/types/BaseTypes';

export const IconSvgTabAdd = ({size, color}: IIcon) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        enableBackground: "new 0 0 512 512",
      }}
      xmlSpace="preserve"
    >
      <Path
        style={{
          fill: "#009fd3",
        }}
        d="M230.4 320h179.189v95.998H230.4z"
      />
      <Path
        style={{
          fill: color || "#00e588",
        }}
        d="M102.403 320h85.334v138.667h264.528v-182.4c-27.098 0-49.067-21.966-49.067-49.067 0 27.101-21.966 49.067-49.065 49.067-27.1 0-49.069-21.966-49.069-49.067 0 27.101-21.967 49.067-49.065 49.067s-49.067-21.966-49.067-49.067c0 27.101-21.967 49.067-49.067 49.067-27.099 0-49.067-21.966-49.067-49.067 0 27.101-21.967 49.067-49.065 49.067v182.4H102.4L102.403 320zm128.001 0h179.195v95.998H230.404V320z"
      />
      <Path
        style={{
          fill: "#ff2c47",
        }}
        d="M206.934 202.669V227.2c0 27.101-21.967 49.067-49.067 49.067-27.099 0-49.067-21.966-49.067-49.067v-24.531l29.44-106.667h78.507l-9.813 106.667z"
      />
      <Path
        style={{
          fill: "#ff6b39",
        }}
        d="M305.066 202.669V227.2c0 27.101-21.967 49.067-49.065 49.067s-49.067-21.966-49.067-49.067v-24.531l9.812-106.667h78.509l9.811 106.667z"
      />
      <Path
        style={{
          fill: "#ff2c47",
        }}
        d="M403.199 202.669V227.2c0 27.101-21.966 49.067-49.065 49.067-27.1 0-49.069-21.966-49.069-49.067v-24.531l-9.81-106.667h78.507l29.437 106.667z"
      />
      <Path
        style={{
          fill: "#ff6b39",
        }}
        d="M501.333 202.669V227.2c0 27.101-21.969 49.067-49.068 49.067-27.098 0-49.067-21.966-49.067-49.067v-24.531L373.761 96.002h78.505l49.067 106.667z"
      />
      <Path
        style={{
          fill: color || "#00e588",
        }}
        d="M59.733 53.333h392.533V96H59.733z"
      />
      <Path
        style={{
          fill: "#ff6b39",
        }}
        d="M10.67 202.669 59.737 96.002h78.505l-29.44 106.667V227.2c0 27.101-21.967 49.067-49.065 49.067-27.101 0-49.067-21.966-49.067-49.067v-24.531z"
      />
      <Path
        style={{
          fill: "#009fd3",
        }}
        d="M102.4 320h85.333v138.667H102.4z"
      />
      <Path
        style={{
          fill: "#000003",
        }}
        d="M501.333 448h-38.401V285.961c27.861-5.046 49.065-29.466 49.065-58.761v-24.533c0-.382-.021-.758-.061-1.13-.009-.066-.022-.131-.031-.198a10.238 10.238 0 0 0-.149-.914c-.017-.078-.041-.154-.06-.23a9.982 9.982 0 0 0-.234-.847c-.03-.092-.067-.181-.1-.273a10.942 10.942 0 0 0-.299-.754c-.016-.036-.027-.075-.044-.112L462.931 93.665V53.333c0-5.891-4.777-10.667-10.667-10.667H59.734c-5.89 0-10.667 4.775-10.667 10.667v40.333L.976 198.209c-.017.036-.028.075-.044.112-.11.245-.206.497-.298.752-.033.092-.07.182-.101.276-.091.275-.164.558-.233.843-.018.078-.044.156-.061.234-.065.3-.11.605-.149.913-.009.067-.023.132-.03.199-.039.37-.06.747-.06 1.129V227.2c0 29.296 21.205 53.715 49.068 58.761V448H10.667C4.775 448 0 452.775 0 458.667s4.775 10.667 10.667 10.667h490.667c5.891 0 10.667-4.775 10.667-10.667S507.225 448 501.333 448zm-49.067-182.4c-21.175 0-38.402-17.227-38.402-38.401v-13.867h76.8v13.867c0 21.174-17.225 38.401-38.398 38.401zm-157.867-38.4c0 21.174-17.226 38.401-38.4 38.401s-38.4-17.227-38.4-38.401v-13.867h39.835c5.89 0 10.667-4.775 10.667-10.667 0-5.891-4.777-10.667-10.667-10.667h-38.807l7.851-85.331h59.044l8.877 96.487V227.2zM411.318 192l-23.55-85.331h57.663L484.683 192h-73.365zm-291.85 12.111 26.893-97.443h58.692L197.202 192h-7.647c-5.89 0-10.667 4.775-10.667 10.667 0 5.891 4.777 10.667 10.667 10.667h6.71V227.2c0 21.174-17.225 38.401-38.398 38.401-21.174 0-38.4-17.227-38.4-38.401l.001-23.089zm196.219-2.421-8.742-95.021h58.693L389.187 192h-39.962c-5.89 0-10.667 4.775-10.667 10.667 0 5.891 4.777 10.667 10.667 10.667h43.305V227.2c0 21.174-17.225 38.401-38.398 38.401-21.174 0-38.4-17.227-38.4-38.401v-24.533c0-.327-.015-.653-.045-.977zM70.401 64h371.198v21.333H70.401V64zM21.333 227.2v-13.867h28.876c5.89 0 10.667-4.775 10.667-10.667 0-5.891-4.775-10.667-10.667-10.667H27.314l39.254-85.331h57.661l-25.711 93.161a10.663 10.663 0 0 0-.384 2.837V227.2c0 21.174-17.226 38.401-38.4 38.401S21.333 248.373 21.333 227.2zm49.068 58.761c15.85-2.87 29.539-12.006 38.4-24.752 10.798 15.531 28.759 25.725 49.067 25.725 20.306 0 38.268-10.194 49.065-25.725 10.798 15.531 28.759 25.725 49.067 25.725 20.307 0 38.269-10.194 49.067-25.725 10.798 15.531 28.759 25.725 49.067 25.725 20.306 0 38.268-10.194 49.065-25.725 8.862 12.746 22.551 21.882 38.402 24.753V448h-243.2V319.998c0-5.891-4.777-10.667-10.667-10.667h-85.333c-5.89 0-10.667 4.775-10.667 10.667V448H70.401V285.961zM113.068 448V330.665h64v48h-10.665c-5.89 0-10.667 4.775-10.667 10.667s4.777 10.667 10.667 10.667h10.665V448h-64z"
      />
      <Path
        style={{
          fill: "#000003",
        }}
        d="M230.402 426.665h179.195c5.89 0 10.667-4.775 10.667-10.667v-95.995c0-.354-.019-.708-.053-1.06-.015-.146-.043-.288-.063-.433-.028-.201-.052-.4-.092-.599-.034-.17-.08-.335-.122-.502-.044-.171-.081-.341-.131-.51-.05-.165-.112-.323-.17-.485-.06-.167-.115-.336-.183-.501-.062-.149-.134-.291-.203-.436-.079-.171-.156-.342-.245-.51-.073-.137-.156-.266-.236-.398-.098-.166-.193-.335-.301-.497-.096-.143-.203-.277-.305-.415-.106-.142-.203-.286-.316-.422a11.55 11.55 0 0 0-.603-.667c-.035-.036-.065-.076-.101-.112-.034-.034-.071-.063-.108-.097-.217-.21-.438-.416-.672-.607-.134-.11-.274-.206-.412-.308-.142-.106-.281-.215-.427-.314-.158-.107-.323-.198-.485-.295-.137-.081-.269-.166-.41-.242-.164-.089-.335-.163-.501-.242-.148-.069-.293-.144-.445-.206-.163-.068-.331-.123-.497-.181-.162-.058-.323-.121-.489-.171-.167-.051-.338-.089-.509-.131-.167-.042-.332-.089-.503-.123-.199-.039-.399-.064-.599-.092-.145-.02-.287-.048-.433-.063a10.748 10.748 0 0 0-1.06-.053H230.402c-5.891 0-10.667 4.775-10.667 10.667v96c0 5.891 4.776 10.667 10.667 10.667zm108.947-21.334 59.581-59.582v59.582h-59.581zm-98.28-74.666h82.435l-4.579 4.579c-4.165 4.165-4.165 10.919 0 15.086a10.633 10.633 0 0 0 7.542 3.124c2.73 0 5.459-1.041 7.542-3.124l19.664-19.664h30.17l-74.667 74.667h-68.109v-74.668h.002z"
      />
      <Path
        style={{
          fill: "#000003",
        }}
        d="M309.25 375.091c4.165-4.165 4.166-10.918.002-15.085-4.165-4.166-10.917-4.166-15.086-.003l-4.645 4.644c-4.165 4.165-4.166 10.918-.002 15.085 2.083 2.084 4.814 3.125 7.543 3.125s5.458-1.041 7.541-3.123l4.647-4.643z"
      />
    </Svg>
  );
};
