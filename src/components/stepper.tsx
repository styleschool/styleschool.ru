
import { Flex,
  Text,
  Box,
  useMediaQuery,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps
  } from '@chakra-ui/react'
import { memo } from "react"

export default memo(function Gallery(props: any) {
  const { steps, active } = props;
  const [isMax1100] = useMediaQuery('(max-width: 1100px)');
  const { activeStep } = useSteps({
    index: active,
    count: steps.length,
  });
  return (
      <Stepper index={active} colorScheme='red' height='100px' gap='0'>
      {steps.map((step: {title: string; description: string;}, index:number) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepNumber />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
})
