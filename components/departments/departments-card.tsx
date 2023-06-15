export default function DepartmentCard(props: any) {

  return (
    <>

      <h2><a href={`#`}>{props.anchor}</a></h2>
      <hr className='horizontal-line-adjust' />
      <div className='alphabet-index-container' id="anchorTag">
        <div className="alpha-admin-tablet">
          <h3><a href={props.dept_prog_url} title="Visit the department program page for details">{props.dept_prog_name}</a></h3>
          <p className="directions-content">
            <a href={createMapLink(props.site_entity_name,
              props.clinic_name,
              props.street_name,
              props.street_number,
              props.suite,
              props.zipcode,
              props.city,
              props.state)}  title="Get Directions">
              {/* {department.site_entity_name &&
                    <span>{getSiteEntityName(department.clinic_name, department.hide_clinic_name, department.site_entity_name)}</span>
                }     */}
              {showSiteEntityName(props.clinic_name, props.hide_clinic_name, props.site_entity_name) === true &&
                <>
                  <span>{props.site_entity_name}</span><br />
                </>
              }
              {props.street_number &&
                <>
                  {props.street_number} {props.street_name}
                </>
              }
              {props.suite &&
                <>
                  <br />
                  {props.suite}
                </>
              }
              {props.city && props.state && props.zipcode &&
                <>
                  <br />
                  {props.city}, {props.state} {props.zipcode}
                </>
              }
            </a>
            {props.phone &&
              <>
                <br />
                <span>Phone: </span>
                <a href={formatPhoneLink(props.phone)}>{addDashes(props.phone)}</a>
              </>
            }
            {props.fax &&
              <>
                <br /><span>Fax: {props.fax}</span>
              </>
            }
          </p>
        </div>
      </div>
    </>

  )
}

function showSiteEntityName(clinicName: any, isHideClinicName: boolean, siteEntityName: any) {
  if (isHideClinicName === false || clinicName === siteEntityName){
    return false;
  }
  else {
    return true;
  }
}

function formatPhoneLink(phone: any) {
  if (phone !== undefined && phone.length === 10) {
    return "tel:+" + phone;
  }
  else {
    return "";
  }
}

function addDashes(phone: any) {
  if (phone !== undefined && phone.length === 10)
    return phone.slice(0,3)+"-"+phone.slice(3,6)+"-"+phone.slice(6);
  else
    return phone;
}

function createMapLink(
  site_entity_name: any,
  clinic_name: any,
  street_name: any,
  street_number: any,
  suite: any,
  zipcode: any,
  city: any,
  state: any) {
  var locTitle = site_entity_name ? site_entity_name : clinic_name;

  if (street_name !== undefined && street_name !== ""){
    return  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(
      locTitle + ", " + street_number + " " + street_name + " " + suite + ", "
      + city+ ", " +state+ " " +zipcode)
  } else
    return '';
}


