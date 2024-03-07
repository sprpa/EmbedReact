import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
  // Define an array containing the data for each accordion item, including sub-items
  const accordionItems = [
    {
      header: 'Production',
      subItems: [
        {
          title: 'Subitem 1 for Production',
          description: 'Description for Subitem 1',
          details: 'Additional details for Subitem 1',
        },
        {
          title: 'Subitem 2 for Production',
          description: 'Description for Subitem 2',
          details: 'Additional details for Subitem 2',
        },
        {
          title: 'Subitem 3 for Production',
          description: 'Description for Subitem 3',
          details: 'Additional details for Subitem 3',
        },
      ],
    },
    {
      header: 'Operation',
      subItems: [
        {
          title: 'Subitem 1 for Operation',
          description: 'Description for Subitem 1',
          details: 'Additional details for Subitem 1',
        },
        {
          title: 'Subitem 2 for Operation',
          description: 'Description for Subitem 2',
          details: 'Additional details for Subitem 2',
        },
        {
          title: 'Subitem 3 for Operation',
          description: 'Description for Subitem 3',
          details: 'Additional details for Subitem 3',
        },
      ],
    },
    // Add more items here...
  ];

  return (
    <Accordion className='d-flex flex-column gap-3'>
      {/* Map over the accordionItems array and render Accordion.Item for each item */}
      {accordionItems.map((item, index) => (
        <Accordion.Item key={index} className='border-0' eventKey={index.toString()}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body className='p-0'>
            {item.body}
            {/* Render sub-item accordions if subItems array exists */}
            {item.subItems && (
              <Accordion className='mt-3 ms-3 leftBorder ps-3'>
                {item.subItems.map((subItem, subIndex) => (
                  <Accordion.Item className='mb-3 border-0' key={subIndex} eventKey={`${index}-${subIndex}`}>
                    <Accordion.Header>{subItem.title}</Accordion.Header>
                    <Accordion.Body  className='p-0 p-2 '>
                      <p>Description: {subItem.description}</p>
                      <p>Details: {subItem.details}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            )}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AllCollapseExample;
