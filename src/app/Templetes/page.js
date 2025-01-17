"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  X,
  File,
  ChevronRight,
  Info,
  ListChecks,
  CalendarDays,
} from "lucide-react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { DialogPortal } from "@radix-ui/react-dialog";
import Image from "next/image";

const documents = [
  {
    title: "Export Agreement/Proforma Invoice",
    description:
      "Initial agreement outlining terms, prices, and conditions before final invoice",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sections include: Buyer & Seller Details, Terms of Trade, Product Specifications, Payment Terms...",
    details: {
      purpose:
        "Establishes initial terms and conditions for international trade",
      requiredFields: [
        "Buyer Information",
        "Seller Information",
        "Product Details",
        "Payment Terms",
        "Delivery Terms",
      ],
      validityPeriod: "30 days from issue",
      requirements: "Company letterhead, authorized signature, company stamp",
    },
  },
  {
    title: "Commercial Invoice",
    description:
      "Official invoice stating the value, quantity, and details of exported goods",
    preview:
      "Contains detailed information including item descriptions, quantities, values, and terms of sale. Sections include: Buyer Information, Seller Information, Product Descriptions, and Total Costs.",
    details: {
      purpose:
        "Serves as a formal bill for goods being exported, used for customs clearance and tax calculation",
      requiredFields: [
        "Invoice Number",
        "Date",
        "Buyer Information",
        "Seller Information",
        "Item Details",
        "Total Amount",
      ],
      validityPeriod: "Valid for customs purposes during shipment",
      requirements:
        "Printed on company letterhead with signatures and company stamp",
    },
  },
  {
    title: "Packing List",
    description:
      "Detailed list of items, quantities, and packaging details for shipment",
    preview:
      "Includes packaging details for each item such as weight, dimensions, and number of units. Essential for logistics and customs inspections.",
    details: {
      purpose:
        "Helps with proper handling and customs inspections by listing all package contents clearly",
      requiredFields: [
        "Package Number",
        "Contents",
        "Weight",
        "Dimensions",
        "Total Packages",
      ],
      validityPeriod: "Valid until shipment reaches its destination",
      requirements: "Accurate information aligned with the commercial invoice",
    },
  },
  {
    title: "Certificate of Origin",
    description:
      "Official document certifying where goods were manufactured or produced",
    preview:
      "Official certification from authorized bodies proving the origin of goods. Required for customs and trade agreements.",
    details: {
      purpose:
        "Certifies the country of origin of goods to comply with trade agreements and customs regulations",
      requiredFields: [
        "Exporter Information",
        "Consignee Information",
        "Country of Origin",
        "Product Details",
      ],
      validityPeriod: "Depends on customs or trade agreement requirements",
      requirements: "Issued by authorized government or trade bodies",
    },
  },
  {
    title: "Letter of Credit",
    description:
      "Bank guarantee ensuring payment upon meeting specified conditions",
    preview:
      "A secure payment method for international trade, issued by the buyer's bank to guarantee payment to the seller upon fulfillment of conditions.",
    details: {
      purpose:
        "Guarantees seller's payment in international trade upon meeting the terms specified in the letter",
      requiredFields: [
        "Buyer Information",
        "Seller Information",
        "Bank Details",
        "Terms of Payment",
      ],
      validityPeriod: "Specified in the letter of credit",
      requirements:
        "Issued by a recognized bank and authenticated with supporting documents",
    },
  },
  {
    title: "Bill of Lading",
    description:
      "Transport document serving as receipt and title to shipped goods",
    preview:
      "Acts as a receipt for goods shipped, a contract of carriage, and a document of title. Vital for legal and logistical purposes.",
    details: {
      purpose:
        "Provides proof of goods being shipped and serves as a contract between shipper and carrier",
      requiredFields: [
        "Shipper Information",
        "Consignee Information",
        "Carrier Details",
        "Goods Description",
      ],
      validityPeriod: "Valid throughout the shipment's transit period",
      requirements: "Must be signed by the carrier and shipper",
    },
  },
  {
    title: "Tax Invoice",
    description:
      "Document showing tax calculations and charges on exported goods",
    preview:
      "Lists all applicable taxes for the transaction. Includes details like GST, VAT, or other tax codes specific to the trade region.",
    details: {
      purpose:
        "Ensures compliance with tax regulations and provides clarity on the tax breakdown for goods",
      requiredFields: [
        "Invoice Number",
        "Date",
        "Taxpayer Identification",
        "Tax Breakdown",
        "Total Tax Amount",
      ],
      validityPeriod: "Based on the transaction date",
      requirements:
        "Printed on company letterhead with tax registration number",
    },
  },
  {
    title: "Inland Bill Of Lading",
    description: "Transport document for domestic land-based shipment of goods",
    preview:
      "Documents the transport of goods within a country via land, providing proof of delivery and shipping details.",
    details: {
      purpose:
        "Ensures proper handling of goods during domestic transportation",
      requiredFields: [
        "Shipper Information",
        "Receiver Information",
        "Goods Description",
        "Delivery Address",
      ],
      validityPeriod: "Valid during the inland shipment period",
      requirements: "Signed by the carrier and shipper",
    },
  },
  {
    title: "Ocean Bill Of Lading",
    description: "Maritime transport document for international sea freight",
    preview:
      "Serves as a receipt for goods transported by sea, providing details for the shipper, consignee, and carrier.",
    details: {
      purpose:
        "Acts as a document of title, receipt, and carriage contract for sea freight",
      requiredFields: [
        "Shipper Information",
        "Consignee Information",
        "Carrier Details",
        "Goods Description",
      ],
      validityPeriod: "Valid throughout the maritime transit",
      requirements: "Must be signed by the carrier and shipper",
    },
  },
  {
    title: "Dock Receipt",
    description: "Proof of delivery of goods to the shipping terminal or dock",
    preview:
      "Acknowledges receipt of goods at the shipping dock, essential for initiating the export process.",
    details: {
      purpose: "Confirms goods have been delivered to the dock for shipment",
      requiredFields: [
        "Exporter Information",
        "Dock Information",
        "Goods Description",
        "Date of Receipt",
      ],
      validityPeriod: "Until goods are loaded onto the vessel",
      requirements: "Issued by the dock authority or shipping agent",
    },
  },
  {
    title: "Airway Bill",
    description:
      "Air transport document and receipt for goods shipped by air freight",
    preview:
      "Documents the transportation of goods by air, providing essential details for shippers, consignees, and customs.",
    details: {
      purpose:
        "Ensures proper documentation and tracking for air freight shipments",
      requiredFields: [
        "Shipper Information",
        "Consignee Information",
        "Carrier Details",
        "Goods Description",
      ],
      validityPeriod: "Valid during the air transit period",
      requirements: "Issued by the airline or authorized freight forwarder",
    },
  },
];

const DocumentPreview = ({ isOpen, document, onClose }) => {
  if (!document) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        {/* Overlay */}
        <DialogOverlay className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm" />

        {/* Content */}
        <DialogContent className="fixed left-[50%] top-[50%] w-full max-w-3xl max-h-[95vh] translate-x-[-50%] translate-y-[-50%] bg-[#192130] rounded-xl shadow-2xl p-6 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-white">
                {document.title}
              </h3>
              <p className="mt-2 text-gray-300">{document.description}</p>
            </div>

            {/* Content Area */}
            <div className="flex flex-col md:flex-row gap-6 overflow-auto">
              {/* Left Section - Preview */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="aspect-video bg-white/5 rounded-lg overflow-hidden">
                  <Image
                    src="/dummydoc.png"
                    alt="Document Preview"
                    height={800}
                    width={800}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Template
                </motion.button>
              </div>

              {/* Right Section - Details */}
              <div className="w-full md:w-1/2 space-y-2">
                {/* Purpose */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Info className="w-5 h-5 text-white/60 mr-2" />
                    <h4 className="text-lg text-white font-medium">Purpose</h4>
                  </div>
                  <p className="text-gray-300">{document.details?.purpose}</p>
                </div>

                {/* Required Fields */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <ListChecks className="w-5 h-5 text-white/60 mr-2" />
                    <h4 className="text-lg text-white font-medium">
                      Required Fields
                    </h4>
                  </div>
                  <ul className="text-gray-300 flex flex-col space-y-2">
                    {document.details?.requiredFields.map((field, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2 text-white/40" />
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Validity */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <CalendarDays className="w-5 h-5 text-white/60 mr-2" />
                    <h4 className="text-lg text-white font-medium">
                      Validity & Requirements
                    </h4>
                  </div>
                  <div className="space-y-3 text-gray-300">
                    <p>
                      <span className="text-white/60">Validity Period: </span>
                      {document.details?.validityPeriod}
                    </p>
                    <p>
                      <span className="text-white/60">Requirements: </span>
                      {document.details?.requirements}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

const DocumentCard = ({ document, index }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative p-6 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                {document.title}
              </h3>
              <p className="text-gray-300 text-sm">{document.description}</p>
            </div>
            <File className="w-6 h-6 text-white/60" />
          </div>

          <div className="flex gap-2 mt-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPreviewOpen(true)}
              className="flex-1 px-4 py-2 bg-white/20 rounded-lg text-white text-sm hover:bg-white/30 transition-colors"
            >
              Preview
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-white/20 rounded-lg text-white text-sm hover:bg-white/30 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </motion.button>
          </div>
        </div>
      </motion.div>

      <DocumentPreview
        isOpen={isPreviewOpen}
        document={document}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
};

const ExportDocHub = () => {
  return (
    <div className="min-h-screen bg-[#192130] p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Export Documentation Hub
          </h1>
          <p className="text-gray-300">
            Access and download all essential export documentation templates
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {documents.map((doc, index) => (
            <DocumentCard key={index} document={doc} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExportDocHub;
