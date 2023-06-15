import { Builder } from "@builder.io/react";
import DepartmentCard from "@/components/departments/departments-card";

export const DepartmentCardConfig = {
  name: 'DirectoryCard',
  inputs: [
    { name: 'dept_prog_url', type: 'string', defaultValue: 'I am a dept_prog_url' },
    { name: 'clinic_name', type: 'string', defaultValue: 'I am a clinic_name' },
    { name: 'hide_clinic_name', type: 'boolean', defaultValue: 'I am a hide_clinic_name' },
    { name: 'site_entity_name', type: 'string', defaultValue: 'I am a site_entity_name' },
    { name: 'street_number', type: 'string', defaultValue: 'I am a street_number' },
    { name: 'street_name', type: 'string', defaultValue: 'I am a street_name' },
    { name: 'suite', type: 'string', defaultValue: 'I am a suite' },
    { name: 'city', type: 'string', defaultValue: 'I am a city' },
    { name: 'state', type: 'string', defaultValue: 'I am a state' },
    { name: 'zipcode', type: 'string', defaultValue: 'I am a zipcode' },
    { name: 'phone', type: 'string', defaultValue: 'I am a phone' },
    { name: 'fax', type: 'string', defaultValue: 'I am a fax' },
  ],
}

Builder.registerComponent(DepartmentCard, DepartmentCardConfig);
