import { Box, Group, Text } from "@mantine/core";

export default function DasboardFooter() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <>
      <Box p={"lg"} mt={"lg"}>
        <Group justify="space-between">
          <div>
            <Text
              c="#0A142F"
              style={{
                opacity: 0.75,
                fontSize: 14,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              © 2025 - {currentYear} MOE. All Rights Reserved.
            </Text>
          </div>
        </Group>
      </Box>
    </>
  );
}
