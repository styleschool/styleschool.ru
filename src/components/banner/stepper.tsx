
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

export default memo(function StepperWithDescription(props: any) {
  const { steps, active } = props;
  const [isMax959] = useMediaQuery('(max-width: 959px)');
  const { activeStep } = useSteps({
    index: active || 0,
    count: steps?.length || 0,
  });
  return steps?.length ? (
    <Flex direction="column" w="100%">
      { isMax959 ? null : <Stepper orientation="horizontal" index={active} height='100px' gap="0" p={isMax959 ? '1rem 2rem' : "3rem 12rem"}>
        {steps?.map((step: {title: string; description: string;}, index:number) => (
          // @ts-ignore
          <Step key={index} gap="0">
            <StepIndicator sx={{
              '[data-status=complete] &': { background: 'secondary', borderColor: 'black'},
              '[data-status=active] &': { background: 'secondary', borderColor: 'black'},
              '[data-status=incomplete] &': { background: 'secondary', borderColor: 'black'},
            }}>
              <StepStatus complete={<StepNumber />} />
            </StepIndicator>
            { // @ts-ignore 
              <StepSeparator _horizontal={{ ml:0, backgroundColor: 'secondary' }} />
            }
          </Step>
        ))}
      </Stepper> }
      <Flex direction={isMax959 ? 'column' : 'row'} p={isMax959 ? '1rem 2rem' : '1rem 6rem'} align="center" justifyContent="space-between">
        {steps?.map((step: {title: string; description: string;}, index:number) => (
          <Box key={index} width={isMax959 ? '70%' : '200px'} p={isMax959 ? '1rem 2rem' : ''}>
            <Text textStyle="Bold16" align="center"> {step.title} </Text>
            <Text align="justify"> {step.description} </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  ) : null;
})
