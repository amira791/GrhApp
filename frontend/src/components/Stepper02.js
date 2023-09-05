import React from 'react';
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box, // Import Box from Chakra UI
} from '@chakra-ui/react';

const steps = [
  { title: '01', description: 'Informations Personelles' },
  { title: '02', description: 'Infromations Profesionelles'},
  { title: '03', description: 'Infromations de Paiement' },
  { title: '04', description: 'Infromations Supplementaires' },
];

function Example() {
  const { activeStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  return (
    <Stepper size='lg' colorScheme='green' index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} style={{ padding: '40px', margin: '0px' }}> {/* Adjust padding and margin here */}
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          {index !== steps.length - 1 && <StepSeparator style={{ margin: '0' }} />} {/* Adjust margin here */}
        </Step>
      ))}
    </Stepper>
  );
}

export default Example;
