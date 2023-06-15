import { Builder, builder } from "@builder.io/react";

import './components/departments/department-card.builder';

const API_KEY_PUBLIC : any = process.env.BUILDER_PUBLIC_KEY;
builder.init(API_KEY_PUBLIC);

// Remove this to allow all built-in components to be used too
// const OVERRIDE_INSERT_MENU = false;
//
// if (OVERRIDE_INSERT_MENU) {
//   // (optionally) use this to hide all default built-in components and fully manage
//   // the insert menu components and sections yourself
//   Builder.register('editor.settings', { customInsertMenu: true });
// }
