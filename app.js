const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function getPackage() {
  let getpack = packages.find(package => package.to)
  let properties = ['priorityLevel', 'isFragile', 'weight', 'to', 'trackingnumber']
}





function drawPackages() {
  debugger
  console.log('drawing pckgs');
  let packageRow = document.getElementById('packageRow')
  console.log(packageRow);
  let template = ''
  packages.forEach(package => {
    template += `
  <div class="col-4">
        <div class="pckge text-white">
          <p>PRIORTIY: ${package.priorityLevel}</p>
          <P>FRAGILE: $${package.isFragile}</P>
          <P>WEIGHT: ${package.weight}</P>
          <p>To: ${package.to}</p>
          <p>Tracking #: ${package.trackingNumber}</p>
        </div>
      </div>
`
  })
  console.log(template)
  // need to draw each package
  // @ts-ignore
  packageRow.innerHTML = template
}






















drawPackages()