<template>
  <aside
    :class="`sidebar sidebar-default sidebar-base navs-rounded-all ${sidebarMenuStyle} ${sidebarType.join(
      ' '
    )}`"
    id="first-tour"
    data-toggle="main-sidebar"
    data-sidebar="responsive"
  >
    <div class="sidebar-body pt-0 data-scrollbar">
      <div class="sidebar-list">
        <vertical-nav />
      </div>
    </div>
    <div class="sidebar-footer"></div>
  </aside>
</template>
<script>
import VerticalNav from "./VerticalNav.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import Scrollbar from "smooth-scrollbar";
export default {
  name: "DefaultSidebar",
  components: { VerticalNav },
  setup() {
    const store = useStore();
    const sidebarType = computed(() => store.getters["setting/sidebar_type"]);
    const sidebarMenuStyle = computed(
      () => store.getters["setting/sidebar_menu_style"]
    );
    const toggleSidebar = () => {
      // Code Here
      if (sidebarType.value.includes("sidebar-mini")) {
        store.dispatch(
          "setting/sidebar_type",
          sidebarType.value.filter((item) => item !== "sidebar-mini")
        );
      } else {
        store.dispatch("setting/sidebar_type", [
          ...sidebarType.value,
          "sidebar-mini",
        ]);
      }
    };
    onMounted(() => {
      Scrollbar.init(document.querySelector(".data-scrollbar"), {
        continuousScrolling: false,
      });
      const resizePlugins = () => {
        // For sidebar-mini & responsive
        const sidebarResponsive = document.querySelector(
          '[data-sidebar="responsive"]'
        );
        if (window.innerWidth < 1025) {
          if (sidebarResponsive !== null) {
            if (!sidebarResponsive.classList.contains("sidebar-mini")) {
              sidebarResponsive.classList.add("sidebar-mini", "on-resize");
            }
          }
        } else {
          if (sidebarResponsive !== null) {
            if (
              sidebarResponsive.classList.contains("sidebar-mini") &&
              sidebarResponsive.classList.contains("on-resize")
            ) {
              sidebarResponsive.classList.remove("sidebar-mini", "on-resize");
            }
          }
        }
      };

      /* ------------DOMContentLoaded-------------- */
      document.addEventListener("DOMContentLoaded", () => {
        resizePlugins();
      });
      /* ------------Window Resize------------------ */
      window.addEventListener("resize", function () {
        resizePlugins();
      });
    });
    return { sidebarType, sidebarMenuStyle, toggleSidebar };
  },
};
</script>
