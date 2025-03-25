"use client";

interface InsightsPanelProps {
  insights: string;
  query: string;
}

export default function InsightsPanel({ insights, query }: InsightsPanelProps) {
  if (!insights) {
    return null;
  }

  // Function to format the insights by adding HTML styling
  const formatInsights = (text: string) => {
    // Replace headings
    let formattedText = text
      .replace(/^#\s(.+)$/gm, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
      .replace(
        /^##\s(.+)$/gm,
        '<h3 class="text-lg font-semibold mt-3 mb-2">$1</h3>'
      )
      .replace(
        /^###\s(.+)$/gm,
        '<h4 class="text-base font-semibold mt-2 mb-1">$1</h4>'
      );

    // Replace bullet points
    formattedText = formattedText.replace(
      /^[\*\-]\s(.+)$/gm,
      '<li class="ml-4 list-disc my-1">$1</li>'
    );

    // Replace numbered lists
    formattedText = formattedText.replace(
      /^\d+\.\s(.+)$/gm,
      '<li class="ml-4 list-decimal my-1">$1</li>'
    );

    // Convert to array of lines for easier processing
    const lines = formattedText.split("\n");
    let inBulletList = false;
    let inNumberedList = false;
    let processedLines = [];

    // Process line by line to handle lists
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const isListItem = line.startsWith('<li class="ml-4 list-');
      const isBulletItem = line.startsWith('<li class="ml-4 list-disc');
      const isNumberedItem = line.startsWith('<li class="ml-4 list-decimal');

      // Handle opening list tags
      if (isListItem) {
        if (isBulletItem && !inBulletList) {
          processedLines.push('<ul class="my-2">');
          inBulletList = true;
        } else if (isNumberedItem && !inNumberedList) {
          processedLines.push('<ol class="my-2">');
          inNumberedList = true;
        }
      }
      // Handle closing list tags
      else {
        if (inBulletList) {
          processedLines.push("</ul>");
          inBulletList = false;
        }
        if (inNumberedList) {
          processedLines.push("</ol>");
          inNumberedList = false;
        }
      }

      processedLines.push(line);
    }

    // Close any remaining open lists
    if (inBulletList) {
      processedLines.push("</ul>");
    }
    if (inNumberedList) {
      processedLines.push("</ol>");
    }

    formattedText = processedLines.join("\n");

    // Replace paragraphs (lines that don't start with a tag)
    formattedText = formattedText.replace(
      /^(?!<[uo]l|<li|<h)[^\n].+$/gm,
      '<p class="my-2">$&</p>'
    );

    return formattedText;
  };

  return (
    <div className="bg-blue-50 rounded-lg p-6 mb-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">
        Market Insights: <span className="text-blue-600">{query}</span>
      </h2>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: formatInsights(insights) }}
      />
    </div>
  );
}
