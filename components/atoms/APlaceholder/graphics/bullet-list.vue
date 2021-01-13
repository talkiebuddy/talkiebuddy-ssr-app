<template functional>
  <clipPath :id="props.shapeId">
    <template v-for="(n, index) in props.lines">
      <circle
        :key="`circle${index}`"
        cx="10"
        :cy="index > 0 ? (index * props.lineScale) + (index * props.lineScale * props.lineHeight) + props.lineScale : props.lineScale"
        r="8"
      />
      <rect
        :key="`rect${index}`"
        x="25"
        :y="index > 0 ? (index * props.lineScale) + (index * props.lineScale * props.lineHeight) + props.lineScale / 2 : props.lineScale / 2"
        :rx="props.roundedCorners ? props.lineScale / 2 : 0"
        :ry="props.roundedCorners ? props.lineScale / 2 : 0"
        :height="props.lineScale"
        width="240"
      />
    </template>
  </clipPath>
</template>
