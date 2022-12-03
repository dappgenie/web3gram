<template>
<div :class="`btn-group ${className}`">
    <component v-if="presplit" :is="dropdownSplitTag" :type="splittype" :class="'dropdown-toggle dropdown-toggle-split btn btn-'+splitmainClass" data-bs-toggle="dropdown" :aria-expanded="splitariaExpanded">
        <span :class="'visually-hidden'+splitClass">{{splitDropdownText}}</span>
    </component>
    <component :is="dropdownMainTag" :class="presplit || postsplit? mainClass:`dropdown-toggle ${mainClass}`" data-bs-toggle="dropdown" :id="id" data-bs-display="static" :aria-haspopup="haspopup" :type="type" :role="role" :aria-expanded="ariaExpanded" >
        {{innerText}}
        <slot/>
    </component>
    <component v-if="postsplit" :is="dropdownSplitTag" :type="splittype" :class="'dropdown-toggle dropdown-toggle-split btn btn-'+splitmainClass" data-bs-toggle="dropdown" :aria-expanded="splitariaExpanded">
        <span :class="'visually-hidden'+splitClass">{{splitDropdownText}}</span>
    </component>
</div>
</template>
<script>
export default {
  name: 'dropdown',
  props: {
    className: { type: String },
    presplit: { type: Boolean, default: false },
    postsplit: { type: Boolean, default: false },
    dropdownSplitTag: { type: String, default: 'button' },
    dropdownMainTag: { type: String, default: 'button' },
    splittype: { type: String, default: 'button' },
    splitmainClass: { type: String },
    splitClass: { type: String },
    splitariaExpanded: { type: Boolean, default: false },
    haspopup: { type: Boolean, default: false },
    splitDropdownText: { type: String },
    mainClass: { type: String },
    type: { type: String },
    role: { type: String },
    id: { type: String },
    ariaExpanded: { type: Boolean, default: false },
    innerText: { type: String }
  }
}
</script>
